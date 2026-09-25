import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import * as ds from './index';
import { AnnouncementBar, BlogFilterChip, Button, ContactFormCard, FooterNewsletter, Icon, NavBar, ResearchTable, TextField } from './index';

afterEach(cleanup);
const root = resolve(import.meta.dirname, '..');
const manifest = JSON.parse(readFileSync(resolve(root, 'project/_ds_manifest.json'), 'utf8'));

describe('parity with the design export', () => {
  it('exports every component in _ds_manifest.json', () => {
    for (const { name } of manifest.components) expect(typeof (ds as Record<string, unknown>)[name], name).toBe('function');
  });

  it('declares every token the design system indexed', () => {
    const css = readdirSync(resolve(root, 'src/tokens')).map((f) => readFileSync(resolve(root, 'src/tokens', f), 'utf8')).join('\n');
    const adherence = JSON.parse(readFileSync(resolve(root, 'project/_adherence.oxlintrc.json'), 'utf8'));
    for (const token of adherence['x-omelette'].tokens as string[]) expect(css, token).toContain(token + ':');
  });
});

describe('components', () => {
  it('Button renders a link when given href, and blocks clicks when disabled', () => {
    const onClick = vi.fn();
    render(<><Button href="/demo">Request a demo</Button><Button disabled onClick={onClick}>Off</Button></>);
    expect(screen.getByText('Request a demo').closest('a')?.getAttribute('href')).toBe('/demo');
    fireEvent.click(screen.getByText('Off'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('Icon renders known glyphs and an empty box for unknown names', () => {
    const { container } = render(<><Icon name="arrow-right" /><Icon name="not-a-glyph" size={24} /></>);
    const [known, unknown] = container.querySelectorAll('svg');
    expect(known.childElementCount).toBeGreaterThan(0);
    expect(unknown.childElementCount).toBe(0);
    expect(unknown.getAttribute('width')).toBe('24');
  });

  it('TextField shows its error and marks the input invalid', () => {
    render(<TextField label="Work email" value="x" error="Enter a valid work email" onChange={() => {}} />);
    expect(screen.getByText('Enter a valid work email')).toBeTruthy();
    expect(screen.getByLabelText(/Work email/).getAttribute('aria-invalid')).toBe('true');
  });

  it('ContactFormCard submits and hides the title when null', () => {
    const onSubmit = vi.fn();
    render(<ContactFormCard title={null} onSubmit={onSubmit} />);
    expect(screen.queryByText('Talk to our team')).toBeNull();
    fireEvent.click(screen.getByText('Submit'));
    expect(onSubmit).toHaveBeenCalledOnce();
  });

  it('FooterNewsletter reports the subscribed email', () => {
    const onSubscribe = vi.fn();
    render(<FooterNewsletter onSubscribe={onSubscribe} />);
    fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'a@b.co' } });
    fireEvent.click(screen.getByLabelText('Subscribe'));
    expect(onSubscribe).toHaveBeenCalledWith('a@b.co');
    expect(screen.getByPlaceholderText('Thanks — you are subscribed.')).toBeTruthy();
  });

  it('AnnouncementBar closes', () => {
    const onClose = vi.fn();
    render(<AnnouncementBar onClose={onClose}>News</AnnouncementBar>);
    fireEvent.click(screen.getByLabelText('Close'));
    expect(screen.queryByText('News')).toBeNull();
    expect(onClose).toHaveBeenCalledOnce();
  });

  it('NavBar marks the active link and navigates', () => {
    const onNavigate = vi.fn();
    render(<NavBar active="Research" onNavigate={onNavigate} />);
    expect(screen.getByText('Research').getAttribute('aria-current')).toBe('page');
    fireEvent.click(screen.getByText('cohere'));
    expect(onNavigate).toHaveBeenCalledWith('home');
  });

  it('BlogFilterChip exposes its pressed state; ResearchTable routes row clicks', () => {
    const onRowClick = vi.fn();
    render(<><BlogFilterChip active>All</BlogFilterChip><ResearchTable rows={[{ title: 'Paper' }]} onRowClick={onRowClick} /></>);
    expect(screen.getByText('All').getAttribute('aria-pressed')).toBe('true');
    fireEvent.click(screen.getByText('Paper'));
    expect(onRowClick).toHaveBeenCalledWith({ title: 'Paper' });
  });
});

#!/usr/bin/env python3
"""Dependency-free smoke test: all local HTML asset and page references exist."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit

PUBLIC = Path(__file__).resolve().parents[1] / 'public'

class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.references = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        name = 'href' if tag in ('a', 'link') else 'src'
        if tag in ('a', 'link', 'img', 'script') and name in attrs:
            self.references.append(attrs[name])

issues = []
pages = list(PUBLIC.rglob('*.html'))
for page in pages:
    parser = LinkParser()
    parser.feed(page.read_text(encoding='utf-8'))
    for link in parser.references:
        if not link.startswith('/'):
            continue
        path = urlsplit(link).path
        target = PUBLIC / path.lstrip('/')
        if target.is_dir() or path.endswith('/'):
            target = target / 'index.html'
        if not target.is_file():
            issues.append(f'{page.relative_to(PUBLIC)}: missing {link}')

assert (PUBLIC/'downloads/20-ai-prompts-for-small-business.txt').exists()
assert len(pages) >= 19, f'Only {len(pages)} HTML pages found'
for route in ('ai-tools','studio','free-tools','pricing'):
    assert (PUBLIC / route / 'index.html').exists(), f'Missing hybrid route {route}'
for asset in ('assets/css/hybrid.css','assets/js/hybrid.js'):
    assert (PUBLIC / asset).exists(), f'Missing hybrid asset {asset}'
assert 'Prototype mode' in (PUBLIC/'studio/index.html').read_text(encoding='utf-8')
assert '£15' in (PUBLIC/'pricing/index.html').read_text(encoding='utf-8')
assert not issues, '\n'.join(issues)
print(f'PASS: {len(pages)} pages, all internal URLs and assets exist, free tools and download exist.')

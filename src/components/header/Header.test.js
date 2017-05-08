import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});

it('contains the header-tagline and logo', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  const tagline = div.querySelector('span.Header-tagline');
  const logo = div.querySelector('img.Header-logo');
  expect(tagline).not.toBe(null);
  expect(logo).not.toBe(null);
});

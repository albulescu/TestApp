import React from 'react';
import { Link } from 'react-router';

export default function () {
  return (
    <div>
      This page not found! <Link to={'/'}>Go to homepage</Link>
    </div>
  );
}

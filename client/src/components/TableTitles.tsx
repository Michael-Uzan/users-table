import React from 'react';

// add on click to sort

export const TableTitles = () => {
  return (
    <div className="table-titles">
      {TITLES.map((title) => (
        <div key={title} className="pointer">
          {title}
        </div>
      ))}
    </div>
  );
};

const TITLES = [
  'full name',
  'country',
  'city',
  'email',
  'phone number',
  'job title',
  'years of experince',
];

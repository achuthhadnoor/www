import React from 'react';
import NavLink from 'next/link';
import { useRouter } from 'next/router';

export default ({ to, label }) => {
  const router = useRouter();
  let isSelected = false;
  if (router.pathname === to) {
    isSelected = true;
  }

  return (
    <NavLink href={to}>
      <a
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px 15px',
          textAlign: 'center'
        }}
      >
        <span>{label}</span>
        {isSelected && (
          <svg
            style={{
              position: 'absolute',
              zIndex: '-1',
              top: '52px'
            }}
            width="30"
            height="9"
            viewBox="0 0 30 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.02595 4.85329C1.32512 4.31479 1.85575 3.9442 2.46433 3.84873L25.6507 0.211656C26.4644 0.0840137 27.2732 0.468286 27.6882 1.17975L28.8961 3.25038C29.6387 4.52348 28.796 6.13524 27.3267 6.25185L2.7177 8.20494C1.12685 8.3312 0.0361398 6.63495 0.811152 5.23993L1.02595 4.85329Z"
              fill="#CCFFB4"
            />
          </svg>
        )}
      </a>
    </NavLink>
  );
};

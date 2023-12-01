import Link from 'next/link';
import React from 'react';

interface NavbarProps {
  isSignedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isSignedIn }) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: '10px',
          background: '#ee7f7f',
        }}>
        <div style={{ flex: 1, justifyContent: 'center' }}>
          <Link
            style={{ margin: '10px', color: '#fff', textDecoration: 'none' }}
            href={'/'}>
            Home{' '}
          </Link>
          <Link
            style={{ margin: '10px', color: '#fff', textDecoration: 'none' }}
            href={'/docs'}>
            Docs{' '}
          </Link>
          <Link
            style={{ margin: '10px', color: '#fff', textDecoration: 'none' }}
            href={'/user'}>
            User{' '}
          </Link>
          <Link
            style={{ margin: '10px', color: '#fff', textDecoration: 'none' }}
            href={'/products'}>
            Products{' '}
          </Link>
          <Link
            style={{ margin: '10px', color: '#fff', textDecoration: 'none' }}
            href={'/posts'}>
            Posts{' '}
          </Link>
          <Link
            style={{ margin: '10px', color: '#fff', textDecoration: 'none' }}
            href={'/contact'}>
            Contact Us{' '}
          </Link>
        </div>
        <div>
          <Link
            style={{
              display: 'inline-block',
              margin: '10px',
              color: '#fff',
              textDecoration: 'none',
            }}
            href={'/signOut'}>
            Sign Out{' '}
          </Link>

          <Link
            style={{
              display: 'inline-block',
              margin: '10px',
              color: '#fff',
              textDecoration: 'none',
            }}
            href={'/signIn'}>
            Sign In
          </Link>
        </div>
        {/* <div>
          {isSignedIn ? (
            <Link
              style={{ display: 'inline-block', margin: '10px', color: '#fff', textDecoration: 'none' }}
              href={'#'}
            >
              Sign Out{' '}
            </Link>
          ) : (
            <Link
              style={{ display: 'inline-block', margin: '10px', color: '#fff', textDecoration: 'none' }}
              href={'/signIn'}
            >
              Sign In
            </Link>
          )}
        </div> */}
      </div>
    </>
  );
};

export default Navbar;

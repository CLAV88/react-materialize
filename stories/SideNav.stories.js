import React from 'react';
import { storiesOf } from '@storybook/react';
import SideNav from '../src/SideNav';
import SideNavItem from '../src/SideNavItem';
import Button from '../src/Button';

const stories = storiesOf('Javascript|SideNav', module);
const reactMaterializeLogo = require('./react-materialize-logo.svg');

stories.addParameters({
  info: {
    text: `This is a slide out menu.`
  }
});

stories.add('Default', () => (
  <div>
    <style>
      {`
        #root > div > div {
          z-index: 99999 !important;
        }
      `}
    </style>
    <SideNav
      trigger={<Button>SIDE NAV DEMO</Button>}
      options={{ closeOnClick: true }}
      >
      <SideNavItem userView
        user={{
          background: 'https://onluiz.github.io/react-materialize-docs/img/office.jpg',
          image: reactMaterializeLogo,
          name: 'John Doe',
          email: 'jdandturk@gmail.com'
        }}
      />
      <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
      <SideNavItem href='#!second'>Second Link</SideNavItem>
      <SideNavItem divider />
      <SideNavItem subheader>Subheader</SideNavItem>
      <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
    </SideNav>
  </div>
));

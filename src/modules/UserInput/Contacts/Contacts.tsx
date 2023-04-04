import Section from '@/components/layouts/Section';
import React from 'react';

const SocialHandleRegexRecord: Record<string, string> = {
  Twitter: '(https://www.)?twitter.com/([A-z0-9_-]+)/?',
  GitHub: '(https://www.)?github.com/([A-z0-9_-]+)/?',
  GitLab: '(https://www.)?gitlab.com/([A-z0-9_-]+)/?',
  Portfolio: '(https://)?([\\w+]+)/?',
  Behance: '(https://www.)?behance.com/([A-z0-9_-]+)/?',
  Dribbble: '(https://www.)?dribbble.com/([A-z0-9_-]+)/?',
  YouTube: '(https://www.)?youtube.com/c/([A-z0-9_-]+)/?',
};

const Contacts = () => {
  return (
    <Section
      title='Где люди могут связаться с вами'
      subtitle='Выберите из списка свой адрес в социальной сети'
    ></Section>
  );
};

export default Contacts;

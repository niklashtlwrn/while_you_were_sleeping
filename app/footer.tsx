import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center h-16 bg-darker text-white mt-5">
      <div className="text-center">
        <p className="text-lg">Andreas Krennbauer</p>
        <p className="text-sm">Humboldtgasse 38/32</p>
        <p className="text-sm">1100 Wien</p>
      </div>
    </footer>
  );
};

export default Footer;

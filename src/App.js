import React, {useState} from 'react';
import Aside from './Aside';
import Main from './Main';

const App = ({ setLocale }) => {

  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
    setLocale(checked ? 'ar' : 'en');
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <React.Fragment>
      <Aside image={image}
        collapsed={collapsed}
        rtl={rtl}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}/>
      {/* <Main image={image}
        toggled={toggled}
        collapsed={collapsed}
        rtl={rtl}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
        handleRtlChange={handleRtlChange}
        handleImageChange={handleImageChange}/> */}
    </React.Fragment>
  );
};

export default App;
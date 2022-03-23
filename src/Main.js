import React from 'react';
import Switch from 'react-switch';
import { FaHeart, FaBars } from 'react-icons/fa';

const Main = ({collapsed,
    rtl,
    image,
    handleToggleSidebar,
    handleCollapsedChange,
    handleRtlChange,
    handleImageChange}) => {
    return (
        <React.Fragment>
            <main>
                <div className="block ">
                    <Switch
                        height={16}
                        width={30}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        onChange={handleCollapsedChange}
                        checked={collapsed}
                        onColor="#219de9"
                        offColor="#bbbbbb"
                    />
                    <span> collapsed</span>
                </div>
            </main>
        </React.Fragment>
    );
};

export default Main;

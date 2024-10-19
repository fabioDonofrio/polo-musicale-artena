import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

const InstagramPosts = (props) => {

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <InstagramEmbed url="https://www.instagram.com/p/C7oL892Iql2/" width={328} captioned />
        </div>
    );
};

export default InstagramPosts;
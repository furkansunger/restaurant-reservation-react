import React from 'react'
import { AddressLabel, PhoneLabel, SocialMedia, SocialMediaItem, SocialMediaLink } from '../CommonElements'
import { LocationInfos, TopMenuWrapper } from './TopMenu.element'
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP } from "react-icons/fa";

const TopMenu = () => {
    return (
        <TopMenuWrapper className="primary-bg color-light">
            <div className="container d-flex justify-content-between align-items-center">
                <LocationInfos>
                    <AddressLabel>Toroslar/Mersin</AddressLabel>
                    <span className="mx-1">|</span>
                    <PhoneLabel>(546) 937 5480</PhoneLabel>
                </LocationInfos>
                <SocialMedia>
                    <SocialMediaItem>
                        <SocialMediaLink className="color-light" href="/">
                            <FaFacebookF />
                        </SocialMediaLink>
                    </SocialMediaItem>
                    <SocialMediaItem>
                        <SocialMediaLink className="color-light" href="/">
                            <FaInstagram />
                        </SocialMediaLink>
                    </SocialMediaItem>
                    <SocialMediaItem>
                        <SocialMediaLink className="color-light" href="/">
                            <FaYoutube />
                        </SocialMediaLink>
                    </SocialMediaItem>
                    <SocialMediaItem>
                        <SocialMediaLink className="color-light" href="/">
                            <FaPinterestP />
                        </SocialMediaLink>
                    </SocialMediaItem>
                </SocialMedia>
            </div>
        </TopMenuWrapper>
    )
}

export default TopMenu

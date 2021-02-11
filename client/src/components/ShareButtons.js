import React from 'react';
import { Fragment } from 'react';
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton } from 'react-share';
import { FacebookIcon, WhatsappIcon, TwitterIcon } from 'react-share';

class ShareButtons extends React.Component{

    render() {
        return (<Fragment>
            <FacebookShareButton
                url={this.props.home_page_url}
                quote={this.props.code} >
                <FacebookIcon
                    size={40} round={true} />

            </FacebookShareButton>
            <WhatsappShareButton className='ml-2'
                title={this.props.code}
                url={this.props.home_page_url} separator="
URL: ">
                <WhatsappIcon size={40} round={true} />

            </WhatsappShareButton>

            <TwitterShareButton
                className='ml-2'
                title={this.props.code}
                url={this.props.home_page_url}
            >
                <TwitterIcon size={40} round={true} />
            </TwitterShareButton>
        </Fragment>);
    }
}


export default ShareButtons;
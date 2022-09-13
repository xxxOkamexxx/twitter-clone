import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Sidebar() {
  return (
    <div className='sidebar'>
        {/* Twitter icon */}
        <TwitterIcon className='sidebar__twitterIcon'/>

        {/* Sidebar Option */}
        <SidebarOption text="ホーム" Icon={HomeIcon}/>
        <SidebarOption text="話題を検索" Icon={SearchIcon}/>
        <SidebarOption text="通知" Icon={NotificationsNoneIcon}/>
        <SidebarOption text="メッセージ" Icon={MailOutlineIcon}/>
        <SidebarOption text="ブックマーク" Icon={BookmarkBorderIcon}/>
        <SidebarOption text="リスト" Icon={ListAltIcon}/>
        <SidebarOption text="プロフィール" Icon={PermIdentityIcon}/>
        <SidebarOption text="もっと見る" Icon={MoreHorizIcon}/>
        {/* Button */}
    </div>
  )
}

export default Sidebar
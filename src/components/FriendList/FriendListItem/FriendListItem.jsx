import css from "./FriendListItem.module.css"
export const FriendListItem = ({ id, avatar, name, isOnline }) => {
    return (
    <li className={css.item} key={id}>
        <span className={isOnline? css.online : css.status}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>)}

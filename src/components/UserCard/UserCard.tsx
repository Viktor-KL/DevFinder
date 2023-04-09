import { FC } from 'react'
import styles from './UserCard.module.scss'
import { LocalGithubUser } from '../../types'

interface UserCardProps extends LocalGithubUser {}

export const UserCard: FC<UserCardProps> = (props) => {
    return (
        <div className={styles.userCard}>
            <UserStat 
                repos={props.repos}
                followers={props.followers}
                following={props.following}
            />
        </div>
    )
}

export default UserCard;
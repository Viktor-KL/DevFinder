import { FC } from "react";
import styles from "./InfoItem.module.scss";

export interface InfoItemProps {
  icon: React.ReactNode;
  text?: string | null;
  isLink?: boolean;
}

export const InfoItem: FC<InfoItemProps> = ({ icon, isLink, text }) => {
    const currentText = text || 'Not Avaliable'
    let currentHref = ''

    if (isLink) {
        currentHref = text && text.startsWith('http') ? text : `https://${text}`
    }

  return <div className={`${styles.infoItem}${text ? '' : ` ${styles.empty}`}`}>
    {icon}
    <div className="">
        {isLink && text ? (
            <a href={currentHref} target="_blank" rel='noreferrer' className={styles.link}>currentText</a>
        ) : currentText}
    </div>
  </div>;
};

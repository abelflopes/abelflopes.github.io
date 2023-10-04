import styles from "./index.module.scss";
/// React
import React, { useMemo } from "react";
// Utils
import classNames from "classnames";

interface GalleryProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  items: Array<React.ReactElement<HTMLElement>>;
}

export const Gallery = ({
  className,
  items,
  ...otherProps
}: Readonly<GalleryProps>): React.ReactElement => {
  const computedItems = useMemo(
    () =>
      items.map((item) =>
        React.cloneElement<HTMLElement>(item, {
          ...item.props,
          className: classNames(item.props.className, styles.item),
        }),
      ),
    [items],
  );

  return (
    <div {...otherProps} className={classNames(className, styles.root)}>
      {computedItems}
    </div>
  );
};

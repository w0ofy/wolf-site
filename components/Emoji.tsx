export type EmojiProps = {
  'aria-label': string;
  children: string;
};

const Emoji = (props: EmojiProps) => {
  return <span role="img" {...props} />;
};

export { Emoji };

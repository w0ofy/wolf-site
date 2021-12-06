export type EmojiProps = {
  'aria-label': string;
  children: string;
};

const Emoji: React.FC<EmojiProps> = (props) => {
  return <span role="img" {...props} />;
};

export { Emoji };

const If = ({ children, condition }: { children: any; condition: boolean }) => {
  if (!condition) {
    return null;
  }

  return children;
};

export default If;

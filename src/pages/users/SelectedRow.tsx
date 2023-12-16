import { forwardRef, useRef, useEffect } from "react";

const SelectedRows = forwardRef(({ indeterminate, ...rest }: any, ref: any) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return <input type="checkbox" ref={resolvedRef} {...rest} />;
});

export default SelectedRows;

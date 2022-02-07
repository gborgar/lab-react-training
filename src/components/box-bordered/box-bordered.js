
function BoxBordered({ className, children }) {
  return(
    <div className={`border border-2 border-dark p-2 ${className}`}>
      <h4 className="m-0 fw-light">{children}</h4>
    </div>
  ) 
}

export default BoxBordered;
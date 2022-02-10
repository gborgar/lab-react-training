
function Rating({ className, children, max }) {
  const rate = Math.round(parseFloat(children))
  const fullStars = Array(rate).fill('★').join('')
  const emptyStars = Array(max - rate).fill('☆').join('')
  return (
    <div className={className}>{fullStars}{emptyStars}</div>
  )

}

Rating.defaultProps = {
  className: '',
  children: 0,
  max: 5
}

export default Rating;
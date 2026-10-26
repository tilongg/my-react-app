function BtnLike({ liked, onToggle = (f) => f}) {
    return (
        <button
              type="button"
              aria-pressed={liked}
              onClick={() => onToggle(!liked)}
            >
          {liked ? "Liked" : "Like"} profile
        </button>
    )
}
export default BtnLike;
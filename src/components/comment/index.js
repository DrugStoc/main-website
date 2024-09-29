import { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Samuel Dansu',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dui nisl, tincidunt vitae neque eget, rhoncus tempor velit.',
      likes: 120,
    },
    {
      id: 2,
      author: 'Samuel Dansu',
      text: 'Curabitur elementum elementum felis.',
      likes: 120,
    },
  ]);
  const [newComment, setNewComment] = useState('');

  const handlePostComment = () => {
    if (newComment.trim() !== '') {
      const newCommentObject = {
        id: comments.length + 1,
        author: 'New User',
        text: newComment,
        likes: 0,
      };
      setComments([...comments, newCommentObject]);
      setNewComment('');
    }
  };

  const handleLike = id => {
    const updatedComments = comments.map(comment => {
      if (comment.id === id) {
        return { ...comment, likes: comment.likes + 1 };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <hr style={{ width: '100%', marginTop: 20, marginBottom: 40 }} />
      <div className="comment-input">
        <textarea
          value={newComment}
          rows={5}
          onChange={e => setNewComment(e.target.value)}
          placeholder="Add a Comment"
        ></textarea>
        <button
          onClick={handlePostComment}
          style={{ display: 'block', marginLeft: 'auto', width: 150 }}
        >
          Post
        </button>
      </div>
      <div className="comments-list">
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <div className="comment-avatar">
              <span className="avatar-placeholder"></span>
            </div>
            <div className="comment-content">
              <div className="comment-author">{comment.author}</div>
              <div className="comment-text">{comment.text}</div>
              <div className="comment-actions">
                <button
                  style={{
                    borderRight: '1px solid #77808B',
                    borderRadius: 0,
                  }}
                >
                  Reply
                </button>
                <span style={{ color: '#77808B' }}>{comment.likes} Likes</span>
                <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                  <img
                    src="https://res.cloudinary.com/bizstak/image/upload/v1727641838/like_xnnyc7.svg"
                    width={20}
                    height={20}
                    style={{ cursor: 'pointer' }}
                  />
                  <img
                    src="https://res.cloudinary.com/bizstak/image/upload/v1727642020/dislike_htprna.svg"
                    width={20}
                    height={20}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .comment-section {
          width: 100%;
          margin: 0 auto;
        }

        .comment-input {
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
        }

        textarea {
          padding: 10px;
          font-size: 16px;
          border-radius: 5px;
          border: 1px solid #ccc;
          margin-bottom: 10px;
          resize: none;
        }

        button {
          align-self: flex-start;
          background-color: #4a90e2;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .comments-list {
          margin-top: 20px;
        }

        .comment {
          display: flex;
          padding: 15px 0;
          border-bottom: 1px solid #eee;
        }

        .comment-avatar {
          margin-right: 10px;
        }

        .avatar-placeholder {
          width: 40px;
          height: 40px;
          background-color: #ccc;
          border-radius: 50%;
        }

        .comment-content {
          flex: 1;
        }

        .comment-author {
          font-weight: bold;
          margin-bottom: 5px;
        }

        .comment-text {
          margin-bottom: 10px;
        }

        .comment-actions {
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: end;
        }

        .comment-actions button {
          background: none;
          border: none;
          color: #4a90e2;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default CommentSection;

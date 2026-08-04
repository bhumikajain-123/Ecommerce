import { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/user/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div
        className="card shadow-lg mx-auto border-0"
        style={{ maxWidth: "500px", borderRadius: "15px" }}
      >
        <div className="card-body text-center">

          {/* Profile Image */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
            className="rounded-circle mb-3"
            width="120"
          />

          <h2 className="mb-4">My Profile</h2>

          {user ? (
            <>
              <div className="text-start">

                <div className="mb-3">
                  <strong>Name:</strong>
                  <p className="text-muted">{user.name}</p>
                </div>

                <div className="mb-3">
                  <strong>Email:</strong>
                  <p className="text-muted">{user.email}</p>
                </div>

                <div className="mb-3">
                  <strong>Role:</strong>
                  <p className="text-muted">{user.role}</p>
                </div>

              </div>

              <button className="btn btn-primary w-100">
                Edit Profile
              </button>
            </>
          ) : (
            <h5 className="text-secondary">Loading...</h5>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
function ProfileHead({userName, occupation}) {
    return (
        <thead>
          <tr>
            <th colSpan="2" scope="colgroup">
              <strong>{userName}</strong>
              <br />
              {occupation}
            </th>
          </tr>
        </thead>
    )
}

export default ProfileHead;
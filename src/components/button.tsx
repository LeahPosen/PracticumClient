
///הטבלה הראשונה שעשיתי
{/* <Table hoverRow>
        <thead>
          <tr>
            <th></th>
            <th>Name:</th>
            <th>Start Working</th>
            <th>Birth Day</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {worker.workers.map((w, i) => (
            <tr key={w.id}>
              <td>
                <IconButton onClick={() => { handleEditClick(w.id); }}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => { worker.deleteWorkers(w.id); window.location.reload(); }}>
                  <DeleteIcon />
                </IconButton>
              </td>
              <td>{w.firstName} {w.lastName}</td>
              <td>{w.startWorking}</td>
              <td>{w.birthDate}</td>
              <td>{w.gender === 0 ? 'Male' : 'Female'}</td>
            </tr>
          ))}
        </tbody>
      </Table> */}
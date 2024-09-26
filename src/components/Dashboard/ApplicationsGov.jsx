import React, { useState, useEffect } from 'react';
import { db, storage } from '../../firebase'; // Firestore and Firebase storage instances
import { collection, doc, updateDoc, getDocs } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import { Table } from 'react-bootstrap';
import * as XLSX from 'xlsx';
import "./Dashboard.css";

const ApplicationsGov = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const usersCollection = collection(db, 'users');
        const querySnapshot = await getDocs(usersCollection);

        if (!querySnapshot.empty) {
          const userData = [];
          querySnapshot.forEach((doc) => {
            userData.push({ id: doc.id, ...doc.data() });
          });
          setApplications(userData);
        } else {
          setError('No applications found.');
        }
      } catch (error) {
        setError('Error fetching applications.');
        console.error('Error fetching applications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const getFileUrl = async (userId, fileName) => {
    try {
      const fileRef = ref(storage, `users/${userId}/${fileName}`);
      const fileUrl = await getDownloadURL(fileRef);
      return fileUrl;
    } catch (error) {
      console.error('Error getting file URL:', error);
      return null;
    }
  };

  const handleStatusUpdate = async (applicationId, newStatus) => {
    try {
      const applicationDoc = doc(db, 'users', applicationId);
      await updateDoc(applicationDoc, { status: newStatus });
      setApplications((prev) =>
        prev.map((app) =>
          app.id === applicationId ? { ...app, status: newStatus } : app
        )
      );
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const downloadSpreadsheet = () => {
    const ws = XLSX.utils.json_to_sheet(applications);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Applications');

    // Export the spreadsheet
    XLSX.writeFile(wb, 'applications.xlsx');
  };

  if (loading) {
    return <div>Loading applications...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="table-container">
      <h2>Government Dashboard</h2>
      <button className="btn btn-primary" onClick={downloadSpreadsheet}>
        Download as Spreadsheet
      </button>
      {applications.length === 0 ? (
        <p>No applications available.</p>
      ) : (
        <div className="table-responsive">
          <Table striped bordered hover className="applications-table">
            <thead>
              <tr>
                <th>Actions</th>
                <th>Status</th>
                <th>Submission Date</th>
                <th>Startup Title</th>
                <th>Documents</th>
                <th>Company Name</th>
                <th>Founder Name</th>
                <th>Theme</th>
                <th>Abstract</th>
                <th>Benefit</th>
                <th>Member 0 Name</th>
                <th>Member 0 Email</th>
                <th>Member 0 DOB</th>
                <th>Member 0 Father Name</th>
                <th>Member 0 Gender</th>
                <th>Member 0 ID Number</th>
                <th>Member 0 Mobile</th>
                <th>Member 1 Name</th>
                <th>Member 1 Email</th>
                <th>Member 1 DOB</th>
                <th>Member 1 Father Name</th>
                <th>Member 1 Gender</th>
                <th>Member 1 ID Number</th>
                <th>Member 1 Mobile</th>
                <th>Member 2 Name</th>
                <th>Member 2 Email</th>
                <th>Member 2 DOB</th>
                <th>Member 2 Father Name</th>
                <th>Member 2 Gender</th>
                <th>Member 2 ID Number</th>
                <th>Member 2 Mobile</th>
                <th>Member 3 Name</th>
                <th>Member 3 Email</th>
                <th>Member 3 DOB</th>
                <th>Member 3 Father Name</th>
                <th>Member 3 Gender</th>
                <th>Member 3 ID Number</th>
                <th>Member 3 Mobile</th>
                
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td>
                    <button
                      onClick={() => handleStatusUpdate(app.id, 'Approved')}
                      disabled={app.status === 'Approved'}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleStatusUpdate(app.id, 'Rejected')}
                      disabled={app.status === 'Rejected'}
                    >
                      Reject
                    </button>
                  </td>
                  <td>{app.status || 'Pending'}</td>
                  <td>{app.submissionDate}</td>
                  <td>{app.startupTitle}</td>
                  <td>
                    <ul>
                      {Object.keys(app)
                        .filter((key) => key.startsWith('member') && key.endsWith('idProof'))
                        .map((fileKey, idx) => (
                          <li key={idx}>
                            <a
                              href="#"
                              onClick={async () => {
                                const url = await getFileUrl(app.id, fileKey);
                                if (url) window.open(url, '_blank');
                              }}
                            >
                              View {fileKey}
                            </a>
                          </li>
                        ))}
                      <li>
                        <a
                          href="#"
                          onClick={async () => {
                            const url = await getFileUrl(app.id, 'documents');
                            if (url) window.open(url, '_blank');
                          }}
                        >
                          View Other Documents
                        </a>
                      </li>
                    </ul>
                  </td>
                  <td>{app.companyName}</td>
                  <td>{app.founderName}</td>
                  <td>{app.theme}</td>
                  <td>{app.abstract}</td>
                  <td>{app.benefit}</td>
                  <td>{app.member0_name}</td>
                  <td>{app.member0_email}</td>
                  <td>{app.member0_dob}</td>
                  <td>{app.member0_fatherName}</td>
                  <td>{app.member0_gender}</td>
                  <td>{app.member0_idNumber}</td>
                  <td>{app.member0_mobile}</td>
                  <td>{app.member1_name}</td>
                  <td>{app.member1_email}</td>
                  <td>{app.member1_dob}</td>
                  <td>{app.member1_fatherName}</td>
                  <td>{app.member1_gender}</td>
                  <td>{app.member1_idNumber}</td>
                  <td>{app.member1_mobile}</td>
                  <td>{app.member2_name}</td>
                  <td>{app.member2_email}</td>
                  <td>{app.member2_dob}</td>
                  <td>{app.member2_fatherName}</td>
                  <td>{app.member2_gender}</td>
                  <td>{app.member2_idNumber}</td>
                  <td>{app.member2_mobile}</td>
                  <td>{app.member3_name}</td>
                  <td>{app.member3_email}</td>
                  <td>{app.member3_dob}</td>
                  <td>{app.member3_fatherName}</td>
                  <td>{app.member3_gender}</td>
                  <td>{app.member3_idNumber}</td>
                  <td>{app.member3_mobile}</td>
                 
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default ApplicationsGov;

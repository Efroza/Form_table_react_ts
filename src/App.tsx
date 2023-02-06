import React, { useState } from 'react';
import { TextField, Button, Table, TableBody, TableRow, TableCell } from '@material-ui/core';

// Define an interface for the form data
interface FormData {
  name: string;
  description: string;
}

const FormPage: React.FC = () => {
  // State for the form data
  const [formData, setFormData] = useState<FormData[]>([]);

  // State for the form fields
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  // Handle the form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Add the current form data to the formData state
    setFormData([...formData, { name, description }]);

    // Reset the form fields
    setName('');
    setDescription('');
  };

  // Handle the deletion of a form from the table
  const handleDelete = (index: number) => {
    // Filter the form data to remove the specified form
    setFormData(formData.filter((_, i) => i !== index));
  };

  return (
    <div>
      {/* The form */}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <TextField
          label="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
        <Button type="submit">Submit</Button>
      </form>
      {/* The table */}
      <Table>
        <TableBody>
          {formData.map((data, index) => (
            <TableRow key={index}>
              {/* Display the name */}
              <TableCell>{data.name}</TableCell>
              {/* Display the description */}
              <TableCell>{data.description}</TableCell>
              {/* Delete button */}
              <TableCell>
                <Button onClick={() => handleDelete(index)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default FormPage;

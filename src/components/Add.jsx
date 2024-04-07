// import * as React from 'react';
// import { useContext } from 'react';
// import { observer } from 'mobx-react-lite';
// import { OpenContext } from './Workers';
// import worker from '../data/worker';
// import Table from '@mui/joy/Table';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { Dialog, FormControl, MenuItem, IconButton, Button, Slide } from '@mui/material';
// import { useForm } from 'react-hook-form';
// import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
// import PersonIcon from '@mui/icons-material/Person';
// import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
// import Input from '@mui/joy/Input';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Card from '@mui/joy/Card';
// import CardActions from '@mui/joy/CardActions';
// import CardContent from '@mui/joy/CardContent';
// import CardOverflow from '@mui/joy/CardOverflow';
// import Typography from '@mui/joy/Typography';
// import FormLabel from '@mui/joy/FormLabel';
// import Select from '@mui/material/Select';

// const Edit = observer(({ w }) => {
//   const {open,setOpen} = useContext(OpenContext);

//   const { register, handleSubmit, reset, setValue } = useForm();
//   function update(upWorker) {
//     worker.putWorkers(w.id, upWorker);
//     setOpen(false)
//   }
//   return (<form onSubmit={handleSubmit(update)}>
//     <Card
//       data-resizable
//       sx={{
//         textAlign: 'center',
//         alignItems: 'center',
//         width: 343,
//         // to make the demo resizable
//         overflow: 'auto',
//         resize: 'horizontal',
//         '--icon-size': '100px',
//       }}
//     >
//       <CardOverflow variant="solid" color="primary">
//         <AspectRatio
//           variant="outlined"
//           color="primary"
//           ratio="1"
//           sx={{
//             m: 'auto',
//             transform: 'translateY(50%)',
//             borderRadius: '50%',
//             width: 'var(--icon-size)',
//             boxShadow: 'sm',
//             bgcolor: 'background.surface',
//             position: 'relative',
//           }}
//         >
//           <div>
//             <EditIcon color="primary" sx={{ fontSize: '4rem' }} />
//           </div>
//         </AspectRatio>
//       </CardOverflow>
//       <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
//         Edit details
//       </Typography>
//       <CardContent sx={{ maxWidth: '40ch' }}>
//         <FormControl >
//           <FormLabel>First Name:</FormLabel>
//           <Input defaultValue={w?.firstName || ''} endDecorator={<PersonIcon />} {...register("firstName")} />
//         </FormControl>
//         <FormControl>
//           <FormLabel>Last Name:</FormLabel>
//           <Input defaultValue={w?.lastName || ''} endDecorator={<PhoneEnabledIcon />} type="tel" {...register("lastName")} />
//         </FormControl>
//         <FormControl>
//           <FormLabel>Birth Date:</FormLabel>
//           <Input defaultValue={w?.birthDate || ''}  type="datetime-local"  {...register("birthDate")} />
//         </FormControl>
//         <FormControl>
//           <FormLabel>Start Working:</FormLabel>
//           <Input defaultValue={w?.startWorking || ''}  type="datetime-local"  {...register("startWorking")} />
//         </FormControl>

//       </CardContent>
//       <CardActions
//         orientation="vertical"
//         buttonFlex={1}
//         sx={{
//           '--Button-radius': '40px',
//           width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',
//         }}
//       >
//         <Button type="submit" variant="solid" color="primary">
//           Update
//         </Button>

//       </CardActions>
//     </Card>
//   </form>);
// });
// export default Edit;

import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import worker from '../data/worker';
import Table from '@mui/joy/Table';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dialog, FormControl, MenuItem, IconButton, Button, Slide } from '@mui/material';
import { useForm } from 'react-hook-form';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PersonIcon from '@mui/icons-material/Person';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import Input from '@mui/joy/Input';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import FormLabel from '@mui/joy/FormLabel';
import Select from '@mui/material/Select';

const Add = observer(({ w }) => {
  const { open, setOpen } = useContext(OpenContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    startWorking: ''
  });

  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    if (w) {
      setFormData({
        firstName: w.firstName || '',
        lastName: w.lastName || '',
        birthDate: w.birthDate || '',
        startWorking: w.startWorking || ''
      });
    }
  }, [w]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function update() {
    formData.gender = 0;
    formData.rolesList = []
    console.log(formData);
    worker.putWorkers(w.id, formData);
    setOpen(false);
  }

  return (
    <form onSubmit={handleSubmit(update)}>
      <Card
        data-resizable
        sx={{
          textAlign: 'center',
          alignItems: 'center',
          width: 343,
          overflow: 'auto',
          resize: 'horizontal',
          '--icon-size': '100px',
        }}
      >
        <CardOverflow variant="solid" color="primary">
          <AspectRatio
            variant="outlined"
            color="primary"
            ratio="1"
            sx={{
              m: 'auto',
              transform: 'translateY(50%)',
              borderRadius: '50%',
              width: 'var(--icon-size)',
              boxShadow: 'sm',
              bgcolor: 'background.surface',
              position: 'relative',
            }}
          >
            <div>
              <EditIcon color="primary" sx={{ fontSize: '4rem' }} />
            </div>
          </AspectRatio>
        </CardOverflow>
        <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
          Edit details
        </Typography>
        <CardContent sx={{ maxWidth: '40ch' }}>
          <FormControl>
            <FormLabel>First Name:</FormLabel>
            <Input value={formData.firstName} endDecorator={<PersonIcon />} name="firstName" onChange={handleInputChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name:</FormLabel>
            <Input value={formData.lastName} endDecorator={<PhoneEnabledIcon />} type="tel" name="lastName" onChange={handleInputChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Birth Date:</FormLabel>
            <Input value={formData.birthDate} type="datetime-local" name="birthDate" onChange={handleInputChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Start Working:</FormLabel>
            <Input value={formData.startWorking} type="datetime-local" name="startWorking" onChange={handleInputChange} />
          </FormControl>
        </CardContent>
        <CardActions
          orientation="vertical"
          buttonFlex={1}
          sx={{
            '--Button-radius': '40px',
            width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',
          }}
        >
          <Button type="submit" variant="solid" color="primary">
            Update
          </Button>
        </CardActions>
      </Card>
    </form>
  );
});

export default Add;

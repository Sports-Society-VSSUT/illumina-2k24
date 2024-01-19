import  Stack  from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import memberData from '@/library/data/memberData';


function Members() {
  return (
    <Stack sx={{ gap: '20px', padding: '20px', justifyContent: 'space-between', mt: '500px', mb: '25px', overflowX:"hidden" }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        ADMINISTRATION
      </Typography>

      <Stack
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2,1fr)', md: 'repeat(4, 1fr)' },
          gap: { xs: '5px', md: '10px' },
        }}
      >
        {memberData.map((member) => (
          <Stack
            key={member.id}
            sx={{
              gap: '5px',
              bgcolor: 'white',
              border: '2px solid black',
              borderRadius: '8px',
              minWidth: '100px',
              justifyContent: 'center',
              padding: '10px',
              mb: '20px',
            }}
          >
            <Avatar alt={member.name} src={`/majhi.jpeg`} sx={{ width: 55, height: 55, ml: '5px' }} />
            <Typography sx={{ fontWeight: 'bold', ml: '5px' }}>{member.name}</Typography>
            <Typography sx={{ ml: '5px' }}>{member.role}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default Members;

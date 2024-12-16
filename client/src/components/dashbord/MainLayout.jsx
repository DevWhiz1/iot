import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import {
  Grid,
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Switch,
  Tooltip,
  IconButton,
} from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';

const IOTDashboard = () => {
  const [socket, setSocket] = useState(null);
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const socket = io('http://localhost:3000');
    setSocket(socket);

    socket.on('initial_state', (data) => {
      setDevices(data.devices);
      setLoading(false);
    });

    socket.on('state_update', ({ entityId, state }) => {
      setDevices((prevDevices) =>
        prevDevices.map((device) => ({
          ...device,
          entities: device.entities.map((entity) =>
            entity._id === entityId ? { ...entity, state } : entity
          ),
        }))
      );
    });

    socket.on('connect_error', (err) => {
      console.error('Socket connection error:', err);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleEntityUpdate = (publishTopic, newState) => {
    if (socket) {
      socket.emit('state_change', { publishTopic, state: newState });
    } else {
      console.error('Socket.io is not connected');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      {/* Use CSS flex wrapping for responsive blocks */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3, // Adds spacing between the cards
          justifyContent: 'space-between', // Ensures equal spacing
        }}
      >
        {devices.map((device) => (
          <Card
            key={device._id}
            sx={{
              flex: '1 1 calc(25% - 16px)', // Takes up 25% width minus spacing
              minWidth: '300px', // Ensures a minimum card width
              maxWidth: '100%',
              boxSizing: 'border-box',
            }}
          >
            <CardHeader
              action={
                <Tooltip title="More Options">
                  <IconButton>
                    <MoreVert />
                  </IconButton>
                </Tooltip>
              }
              title={device.deviceName}
            />
            <CardContent>
              {device.entities.map((entity) => (
                <Box
                  key={entity._id}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <OnlinePredictionIcon sx={{ mr: 2 }} />
                  <Typography variant="body1">{entity.entityName}</Typography>

                  {entity.stateType === 'switch' ? (
                    <Switch
                      sx={{ ml: 'auto' }}
                      checked={entity.state === 'ON'}
                      onChange={() =>
                        handleEntityUpdate(
                          entity.publishTopic,
                          entity.state === 'ON' ? 'OFF' : 'ON'
                        )
                      }
                    />
                  ) : (
                    <Typography
                      variant="body1"
                      sx={{
                        ml: 'auto',
                        fontSize: '18px',
                      }}
                    >
                      {entity.state}
                    </Typography>
                  )}
                </Box>
              ))}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default IOTDashboard;

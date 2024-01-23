import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, SimpleGrid} from '@chakra-ui/react';
import React from "react";

const Card2 = ({ icon, title }) => (
  <Card>
    <CardHeader>
      <h5>{icon} {title}</h5> 
    </CardHeader>
  </Card>
);

export default Card2;
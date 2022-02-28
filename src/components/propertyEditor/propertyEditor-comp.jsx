import React, { useState } from 'react';
import { List, Divider } from 'react-native-paper';

import { Input } from './propertyEditor-styles';

const PropertyEditor = ({ property='', defaultValue='', setter, readOnly, divider=false }) => {
    const [ value, setValue ] = useState(defaultValue);

    const handleSubmit = () => setter(value);

    return (
        <>
            <List.Item 
                title={property} 
                right={() => (
                    <Input 
                        disabled={readOnly}
                        placeholder="Not Provided"
                        value={value} 
                        onChangeText={text => setValue(text)}
                        onSubmitEditing={handleSubmit} 
                    />
                )}
            />
            {divider && <Divider />}
        </>
    )
};

export default PropertyEditor;
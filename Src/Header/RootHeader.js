import { View } from 'react-native'
import React, { useMemo, useState } from 'react'
import Categories from './Categories'
import SearchBar from './SearchBar'
import UserProfiles from '../UserProfiles'
import { Users, Category } from '../CustomData'

const RootHeader = () => {

    const [searchText, setSearchText] = useState('');
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    const filteredData = useMemo(() => {
        return [...Category, ...Users].filter(item =>
            item.name.toLowerCase().includes(searchText.toLowerCase())
        );
    }, [searchText]);


    const filteredCategories = useMemo(() =>
        filteredData.filter(item => Category.some(cat => cat.id === item.id)), [filteredData]);

    const filteredProfiles = useMemo(() =>
        Users.filter(user =>
            (selectedCategoryId ? user.categoryId === selectedCategoryId : true) &&
            user.name.toLowerCase().includes(searchText.toLowerCase())
        ), [selectedCategoryId, filteredData]);

    const handleSearch = (text) => {
        setSearchText(text);
    };
    const handleCategorySelect = (id) => {
        setSelectedCategoryId(id);
    };

    return (
        <View>
            <Categories data={filteredCategories} onCategorySelect={handleCategorySelect} />
            <SearchBar searchText={searchText} onSearch={handleSearch} />
            <UserProfiles data={filteredProfiles} />
        </View>
    )
}

export default RootHeader

import React from 'react';
import SearchCard from '../../Components/SearchCard/SearchCard';
import SearchList from '../../Components/SearchCard/SearchList';
import Filter from '../../Components/Filter/Filter';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import './SearchPage.css'

const SearchPage = () => {
    return (
        <div style={{display:"flex", flexDirection:"column", width:"100%"}}>
            <div>
                <Banner />
            </div>
            
            <div className ="searchpage">
                <Filter />
                <div className="divider"></div>
                <div className="searchCardContainer">
                <SearchCard />
                <SearchCard />
                <SearchCard />
                <SearchCard />
                <SearchCard />
                <SearchCard />
                <SearchCard />
                <SearchCard />
                <SearchCard />
                <SearchCard />
                <SearchCard />
                <SearchCard />
                <SearchCard />
                <SearchCard />
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default SearchPage;

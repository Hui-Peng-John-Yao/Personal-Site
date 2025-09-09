import React from 'react';
import Header from '../Header';
import Hero from './Hero';

function Home() {
    return (
        <div className="min-h-screen bg-blue-600">
            <Header />
            <div className="flex flex-col lg:flex-row min-h-[calc(100vh-60px)]">
                <Hero />
            </div>
        </div>
    );
}

export default Home;
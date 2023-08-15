import React, { Component } from 'react';
import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';
import {ImageGallery} from './ImageGallery/ImageGallery';
import {Loader} from './Loader/Loader';
import {Modal} from './Modal/Modal';
import {Button} from './Button/Button';





























































// export class App extends Component {
//    state = {
//      images: [],
//      query: '',
//      page: 1,
//      isLoading: false,
//      showModal: false,
//      selectedImage: null,
//    };
 
//    handleSearch = async query => {
//      await this.setState({ query, page: 1, images: [] });
//      this.fetchImages();
//    };
 
//    fetchImages = async () => {
//      const { query, page } = this.state;
//      const API_KEY = '38243534-5c7cfe447b5c7a0fae0b6f146';
//      const URL = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
 
//      this.setState({ isLoading: true });
 
//      try {
//        const response = await axios.get(URL);
//        this.setState(prevState => ({
//          images: [...prevState.images, ...response.data.hits],
//          page: prevState.page + 1,
//        }));
//      } catch (error) {
//        console.error('Error fetching images:', error);
//      } finally {
//        this.setState({ isLoading: false });
//      }
//    };
 
//    openModal = image => {
//      this.setState({ showModal: true, selectedImage: image });
//    };
 
//    closeModal = () => {
//      this.setState({ showModal: false, selectedImage: null });
//    };
 
//    render() {
//      const { images, isLoading, showModal, selectedImage } = this.state;
 
//      return (
//        <div>
//          <Searchbar onSubmit={this.handleSearch} />
//          <ImageGallery images={images} onImageClick={this.openModal} />
//          {isLoading && <Loader />}
//          {images.length > 0 && !isLoading && (
//            <Button onClick={this.fetchImages}>Load More</Button>
//          )}
//          {showModal && (
//            <Modal onClose={this.closeModal}>
//              <img src={selectedImage.largeImageURL} alt="" />
//            </Modal>
//          )}
//        </div>
//      );
//    }
//  }

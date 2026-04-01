import { useState } from 'react';
import ProductCard from '../components/ui/ProductCard';
import { productsData } from '../data/products';
import SEO from '../components/ui/SEO';
import './Products.css';

const Products = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Hospital Beds', 'Critical Care', 'Clinical Furniture', 'Consumables'];

  const filteredProducts = filter === 'All' 
    ? productsData 
    : productsData.filter(p => p.category === filter);

  return (
    <div className="products-page animate-fade-in">
      <SEO 
        title="Our Catalog"
        description="Explore QualEquips' comprehensive range of high-quality critical care equipment, consumables, and hospital furniture."
      />
      <div className="page-header bg-primary">
        <div className="container">
          <h1 className="text-white">Our Catalog</h1>
          <p className="text-white" style={{ opacity: 0.8 }}>
            Explore our comprehensive range of high-quality medical equipment.
          </p>
        </div>
      </div>

      <div className="container section-padding">
        {/* Filters */}
        <div className="product-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              category={product.category}
              title={product.title}
              brand={product.brand}
              authorizedDealer={product.authorizedDealer}
              description={product.description}
              images={product.images}
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="no-products">
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

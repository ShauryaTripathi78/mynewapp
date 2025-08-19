"use client"
import React, { useState, useEffect } from 'react';


interface Medicine {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  image: string;
}

interface CartItem extends Medicine {
  quantity: number;
}

const MedicineStore: React.FC = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [filteredMedicines, setFilteredMedicines] = useState<Medicine[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showCart, setShowCart] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(0);

  // Mock data - in a real app, you would fetch this from an API
  useEffect(() => {
    const mockMedicines: Medicine[] = [
      {
        id: 1,
        name: 'Paracetamol 500mg',
        description: 'For relief of mild to moderate pain and fever',
        price: 5.99,
        stock: 100,
        category: 'Pain Relief',
        image: 'https://placehold.co/300x200?text=Paracetamol'
      },
      {
        id: 2,
        name: 'Ibuprofen 200mg',
        description: 'Nonsteroidal anti-inflammatory drug for pain and fever',
        price: 7.50,
        stock: 75,
        category: 'Pain Relief',
        image: 'https://placehold.co/300x200?text=Ibuprofen'
      },
      {
        id: 3,
        name: 'Amoxicillin 500mg',
        description: 'Antibiotic for bacterial infections',
        price: 12.99,
        stock: 50,
        category: 'Antibiotics',
        image: 'https://placehold.co/300x200?text=Amoxicillin'
      },
      {
        id: 4,
        name: 'Cetirizine 10mg',
        description: 'Antihistamine for allergy relief',
        price: 6.25,
        stock: 120,
        category: 'Allergy',
        image: 'https://placehold.co/300x200?text=Cetirizine'
      },
      {
        id: 5,
        name: 'Omeprazole 20mg',
        description: 'Proton pump inhibitor for acid reflux',
        price: 9.99,
        stock: 80,
        category: 'Digestive Health',
        image: 'https://placehold.co/300x200?text=Omeprazole'
      },
      {
        id: 6,
        name: 'Vitamin C 1000mg',
        description: 'Dietary supplement with antioxidants',
        price: 8.50,
        stock: 150,
        category: 'Vitamins',
        image: 'https://placehold.co/300x200?text=Vitamin+C'
      }
    ];

    setMedicines(mockMedicines);
    setFilteredMedicines(mockMedicines);
  }, []);

  useEffect(() => {
    let results = medicines;
    
    if (searchTerm) {
      results = results.filter(medicine =>
        medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        medicine.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      results = results.filter(medicine => medicine.category === selectedCategory);
    }

    setFilteredMedicines(results);
  }, [searchTerm, selectedCategory, medicines]);

  const addToCart = (medicine: Medicine) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === medicine.id);
      
      if (existingItem) {
        if (existingItem.quantity >= medicine.stock) {
          alert('Cannot add more than available stock');
          return prevCart;
        }
        return prevCart.map(item =>
          item.id === medicine.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...medicine, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    const medicine = medicines.find(m => m.id === id);
    if (medicine && newQuantity > medicine.stock) {
      alert('Cannot add more than available stock');
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const categories = ['All', ...new Set(medicines.map(medicine => medicine.category))];

  const handleCheckout = () => {
    // You would typically send this to your backend
    console.log('Checkout data:', {
      items: cart,
      total: subtotal,
      patientInfo: {} // Would come from patient data
    });
    setCheckoutStep(1);
  };

  return (
    <div className="medicine-store-container">
      <header className="medicine-store-header">
        <h1>Hospital Pharmacy</h1>
        <div className="search-and-cart">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search medicines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <button 
            className="cart-button" 
            onClick={() => setShowCart(!showCart)}
          >
            🛒 Cart ({totalItems})
          </button>
        </div>
      </header>

      {checkoutStep === 0 ? (
        <div className="medicine-store-content">
          <div className={`medicine-list ${showCart ? 'with-cart' : ''}`}>
            {filteredMedicines.length === 0 ? (
              <div className="no-results">No medicines found matching your criteria</div>
            ) : (
              filteredMedicines.map(medicine => (
                <div key={medicine.id} className="medicine-card">
                  <div className="medicine-image">
                    <img src={medicine.image} alt={medicine.name} />
                  </div>
                  <div className="medicine-info">
                    <h3>{medicine.name}</h3>
                    <p className="description">{medicine.description}</p>
                    <p className="category">{medicine.category}</p>
                    <div className="price-stock">
                      <span className="price">${medicine.price.toFixed(2)}</span>
                      <span className="stock">In stock: {medicine.stock}</span>
                    </div>
                    <button 
                      onClick={() => addToCart(medicine)}
                      disabled={medicine.stock === 0}
                    >
                      {medicine.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {showCart && (
            <div className="cart-sidebar">
              <h2>Your Cart</h2>
              {cart.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <>
                  <div className="cart-items">
                    {cart.map(item => (
                      <div key={item.id} className="cart-item">
                        <div className="item-info">
                          <h4>{item.name}</h4>
                          <p>${item.price.toFixed(2)} × {item.quantity}</p>
                        </div>
                        <div className="item-quantity">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                          <span>{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            disabled={item.quantity >= item.stock}
                          >
                            +
                          </button>
                        </div>
                        <button 
                          className="remove-btn"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="cart-summary">
                    <p className="subtotal">Subtotal: ${subtotal.toFixed(2)}</p>
                    <button 
                      className="checkout-btn"
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="checkout-form">
          <h2>Checkout</h2>
          <div className="order-summary">
            <h3>Order Summary</h3>
            {cart.map(item => (
              <div key={item.id} className="order-item">
                <span>{item.name}</span>
                <span>{item.quantity} × ${item.price.toFixed(2)}</span>
              </div>
            ))}
            <div className="order-total">
              <strong>Total:</strong>
              <strong>${subtotal.toFixed(2)}</strong>
            </div>
          </div>
          <form>
            <div className="form-group">
              <label>Delivery Address</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Payment Method</label>
              <select required>
                <option value="">Select payment method</option>
                <option value="card">Credit/Debit Card</option>
                <option value="insurance">Insurance</option>
                <option value="cash">Pay on Delivery</option>
              </select>
            </div>
            <div className="form-actions">
              <button type="button" onClick={() => setCheckoutStep(0)}>Back</button>
              <button type="button" onClick={() => alert('Order placed successfully!')}>
                Place Order
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default MedicineStore;

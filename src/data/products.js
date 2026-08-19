const imageSet = [
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=700&q=85',
]

const catalog = [
  ['Tênis Cloud Nova', 'Calçados', 'Super Dopamina', 'pink', '4.9'], ['Headphone Pulse Max', 'Eletrônicos', '100% Grátis', 'cyan', '4.8'], ['Câmera Instant Joy', 'Eletrônicos', 'Sem Frete', 'gold', '4.7'], ['Camiseta Mood Club', 'Roupas', 'Novo drop', 'pink', '4.9'],
  ['Controle Arcade Pro', 'Games', 'Super Dopamina', 'gold', '5.0'], ['Mini Robô Astro', 'Brinquedos', '100% Grátis', 'cyan', '4.8'], ['Óculos Solar Prism', 'Acessórios', 'Sem Frete', 'pink', '4.6'], ['Jaqueta Aura', 'Roupas', 'Novo drop', 'cyan', '4.9'],
  ['Moletom Pixel Heart', 'Roupas', 'Super Dopamina', 'pink', '4.8'], ['Tênis Neon Runner', 'Calçados', '100% Grátis', 'cyan', '4.9'], ['Smartwatch Orbit', 'Eletrônicos', 'Novo drop', 'gold', '4.7'], ['Câmera Pocket Flash', 'Eletrônicos', 'Sem Frete', 'pink', '4.8'],
  ['Boné Cyber Club', 'Acessórios', 'Novo drop', 'cyan', '4.7'], ['Boneco Cosmic Hero', 'Brinquedos', 'Super Dopamina', 'gold', '4.9'], ['Console Mini Dream', 'Games', '100% Grátis', 'pink', '5.0'], ['Tênis Air Bloom', 'Calçados', 'Sem Frete', 'cyan', '4.8'],
  ['Cropped Galactic', 'Roupas', 'Novo drop', 'pink', '4.8'], ['Keyboard Prism 60', 'Setup Neon', 'Super Dopamina', 'cyan', '4.9'], ['Mouse Glitch Pro', 'Setup Neon', '100% Grátis', 'gold', '4.7'], ['Monitor Aurora', 'Setup Neon', 'Sem Frete', 'pink', '4.8'],
  ['Luminária Moon Mode', 'Setup Neon', 'Novo drop', 'cyan', '4.9'], ['Deskmat Hyperwave', 'Setup Neon', 'Super Dopamina', 'gold', '4.8'], ['Caixa de Som Glow', 'Eletrônicos', '100% Grátis', 'pink', '4.7'], ['Webcam Stream Star', 'Eletrônicos', 'Sem Frete', 'cyan', '4.8'],
  ['Mochila Portal', 'Acessórios', 'Novo drop', 'gold', '4.9'], ['Pulseira Mood Ring', 'Acessórios', 'Super Dopamina', 'pink', '4.6'], ['Carteira Holo', 'Acessórios', '100% Grátis', 'cyan', '4.8'], ['Meia Color Boost', 'Roupas', 'Sem Frete', 'gold', '4.7'],
  ['Sandália Solar', 'Calçados', 'Novo drop', 'pink', '4.8'], ['Bota Night Shift', 'Calçados', 'Super Dopamina', 'cyan', '4.9'], ['Pista Turbo Loop', 'Brinquedos', '100% Grátis', 'gold', '4.8'], ['Kit Slime Galaxy', 'Brinquedos', 'Sem Frete', 'pink', '4.7'],
  ['Cubo Puzzle Hype', 'Brinquedos', 'Novo drop', 'cyan', '4.9'], ['Gamepad Nova', 'Games', 'Super Dopamina', 'gold', '5.0'], ['Cartucho Retro Joy', 'Games', '100% Grátis', 'pink', '4.8'], ['Headset Battle Glow', 'Games', 'Sem Frete', 'cyan', '4.9'],
  ['Mousepad XP Zone', 'Games', 'Novo drop', 'gold', '4.7'], ['Projetor Nebula', 'Eletrônicos', 'Super Dopamina', 'pink', '4.8'], ['Fone Air Beat', 'Eletrônicos', '100% Grátis', 'cyan', '4.9'], ['Óculos Matrix Pop', 'Acessórios', 'Sem Frete', 'gold', '4.6'],
  ['Colar Star Link', 'Acessórios', 'Novo drop', 'pink', '4.8'], ['Regata Voltage', 'Roupas', 'Super Dopamina', 'cyan', '4.7'], ['Calça Wide Future', 'Roupas', '100% Grátis', 'gold', '4.9'], ['Tênis Pixel High', 'Calçados', 'Sem Frete', 'pink', '4.8'],
  ['Mini Drone Zoom', 'Brinquedos', 'Novo drop', 'cyan', '4.7'], ['Boneco Mecha Buddy', 'Brinquedos', 'Super Dopamina', 'gold', '4.9'], ['Console Cloud Play', 'Games', '100% Grátis', 'pink', '4.8'], ['Luz LED Infinity', 'Setup Neon', 'Sem Frete', 'cyan', '4.9'],
]

export const products = catalog.map(([name, category, badge, badgeTone, rating], index) => ({
  id: index + 1,
  name,
  category,
  price: 'R$ 0,00',
  badge,
  badgeTone,
  rating,
  description: 'Uma dose gratuita de hype para sua próxima descoberta.',
  image: imageSet[index % imageSet.length],
}))

export const categories = ['Todos', 'Roupas', 'Calçados', 'Eletrônicos', 'Games', 'Brinquedos', 'Acessórios', 'Setup Neon']

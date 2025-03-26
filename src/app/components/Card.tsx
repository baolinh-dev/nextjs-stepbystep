interface BaseProps {
    title: string;
    description: string;
} 
interface AdvancedCardProps extends BaseProps {
    imageUrl?: string;
  } 
  
  const Card: React.FC<AdvancedCardProps> = ({ title, description, imageUrl }) => {
    return (
      <div className="border p-4 rounded-lg shadow-md">
        {imageUrl && <img src={imageUrl} alt={title} className="w-full h-32 object-cover rounded-lg mb-4" />}
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };
  
  export default Card;
  
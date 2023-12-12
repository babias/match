export const isValidMove = (squareBeingDraggedId, squareBeingReplacedId, width) => {
    const validMoves = [
      squareBeingDraggedId - 1,
      squareBeingDraggedId - width,
      squareBeingDraggedId + 1,
      squareBeingDraggedId + width,
    ];
  
    return validMoves.includes(squareBeingReplacedId);
  };
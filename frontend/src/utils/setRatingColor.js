
export const setRatingColor = (point) => {
    return (point >= 4.5
        ? "bg-green-700"
        : point >= 4
            ? "bg-green-400"
            : point >= 3.5
                ? "bg-yellow-400"
                : point >= 3
                    ? "bg-yellow-600"
                    : "bg-red-500"
    )
}

export const setTextRating = (point) => {
    return (point >= 4.5
        ? "Harika"
        : point >= 4
            ? "Çok iyi"
            : point >= 3.5
                ? "İyi"
                : point >= 3
                    ? "Fena Değil"
                    : "İş görür"
    )
}
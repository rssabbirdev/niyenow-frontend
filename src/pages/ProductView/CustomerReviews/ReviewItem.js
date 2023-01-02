import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewItem = ({ review }) => {
	return (
		<blockquote>
			<header className='flex justify-between italic text-sm'>
				<div class='space-y-3'>
					<p class=''>{review?.customer_name}</p>
					<div class='-ml-1 flex'>
						{[...Array(5).keys()].map((rate) => (
							<FontAwesomeIcon
								key={rate}
								className={
									rate <= review?.customer_rating - 1
										? 'text-yellow-400 h-3 w-3'
										: 'text-gray-300 h-3 w-3 '
								}
								icon={faStar}
							/>
						))}
					</div>
                </div>
                <div>
                    Out of {review.customer_rating} / 5
                </div>
			</header>

			<p class='mt-2 text-gray-700'>{review.customer_review}</p>

			<footer class='mt-4 text-right'>
				<p class='text-xs text-gray-500'>
					John Doe - 12th January, 2024
				</p>
			</footer>
		</blockquote>
	);
};

export default ReviewItem;
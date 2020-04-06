import React, { useState } from 'react';
import { Input, ControlWrapper, Icons, Icon } from '../../bricks';
import { useDebounce } from '../../hooks/useDebounce';
import { useSearch } from '../../hooks/useSearch';
import { generateBemCls } from '../../bricks/utils';

export const SearchForm = ({ article, onUpdateArticle, searchBy, mix, caption }) => {

    const [[count, time], updateStatistics] = useState([null, null]);
    const updateArticleByFunctional = useSearch(onUpdateArticle, updateStatistics, article, searchBy);
    const [value, onUpdate] = useDebounce(updateArticleByFunctional);

    const formCls = generateBemCls({ block: 'searchform', mix });

    const statisticsMessage = [
        isFinite(count) && typeof count === 'number' && `Найдено: ${count}`,
        isFinite(count) && typeof count === 'number' && `Поиск занял: ${time} мс`
    ].filter(Boolean).join('. ');

    return (
        <form className={formCls} onSubmit={(ev) => ev.preventDefault()}>
            <ControlWrapper
                pattern='common'
                size='lg'
                label='Введите фразу для поиска'
                hint={caption}
                mix='searchform__searcher'
                tips={[statisticsMessage]}
            >
                <Input size='xl' placeholder='Например, COVID-19' value={value} onChange={onUpdate}>
                    <Icon>{Icons.Search}</Icon>
                </Input>
            </ControlWrapper>
        </form>
    );
};

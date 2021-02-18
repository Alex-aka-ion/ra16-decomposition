import React from "react";

const exampleStringFromApi = <span>Найдется все, например, <a href="#">фаза луны сегодня</a>.</span>;
/**
 * Текст под строкой поиска
 */
export default class UnderSearchText extends React.Component {
    /*
    показываем из апи прикольные фразы под строкой поиска
     */
    render() {
        return <div>
            {exampleStringFromApi}
        </div>
    }
}

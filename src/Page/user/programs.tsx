import TWTable from "@twister19/twtable";

const Programs = () => {
    

    const buttonClicked = (row:any) => {
        const clicked = (empId:number) =>{
            console.log("empId",empId);
        }

        return(<button type="button" onClick={(event=>clicked(row.empId))} >Test{row.empId}</button>);
    };

    const headers = [{column: "name",displayname: "Name", display: true},
                    {column: "job",displayname: "Job", display: true},
                    {column: "department",displayname: "Depertment", display: true},
                    {column: "team",displayname: "Team Strenth", display: true},
                    {column: "empId", display:false},
                    {button: true,  displayname:"Button1", display:true, column:buttonClicked}];

    const data = [{name:"Ashish", job:"SoftWare Engineer", department:"MB", team:3, empId:1}, 
                    {name:"Nishant",job:"Business",department:"Data2C", team:4, empId:2},
                    {name:"Mukesh",job:"Banker",department:"Data2C", team:5, empId:3},
                    {name:"Shashi",job:"Home Maker",department:"Data2C", team:7, empId:3},
                    {name:"Kanika",job:"Business",department:"Data2C", team:9, empId:5}];
    
    return(
        // <div>Ashish</div>
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <TWTable headers={headers} data={data} 
                                filter={true} 
                                pagination={true} 
                                pageSize={2} 
                                defaultstyle={false} 
                                pageoption={[2,3,4]}/>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <TWTable headers={headers} data={data} pageoption={[2,3,4]}
                                tableClass="table table-striped" filter={true} 
                                pagination={false} pageSize={3} defaultstyle={false}/>
                    </div>
                </div>
            </div>
        </div>
        );
};

export default Programs;

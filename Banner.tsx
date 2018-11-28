import * as React from "react";
import {Button, StyleRulesCallback, withStyles, 
        Typography, Theme, StyledComponentProps, Collapse} from "@material-ui/core";


type Estilos = "paper" | "avatar" | "text" | "buttons";

const styles: StyleRulesCallback<Estilos> = (theme: Theme) => ({
    paper: {
        ...theme.mixins.gutters(),
        padding: `${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
        backgroundColor: theme.palette.background.paper
      },
      avatar: {
        backgroundColor: theme.palette.primary.main
      },
      text: {
        flexGrow:1,
        paddingTop: theme.spacing.unit
      },
      buttons: {
          alignSelf: 'flex-end'
      }
});

export class BannerInner extends React.Component<IBannerProps> {

    constructor(props) {
        super(props);
    }

    public render() {    
        const classes = this.props.classes || {};        

        return (            
            <React.Fragment>
                <Collapse in={this.props.open}>
                    <div className={classes.paper}>
                        <div style={{display:'flex'}}>
                            <div className={classes.text}>                            
                                <Typography component="p">
                                    {this.props.text}
                                </Typography>
                            </div>
                            <div className={classes.buttons}>
                                <Button color="primary" onClick={this.handleClose}>{this.props.buttonLabel || 'Ok'}</Button>
                            </div>
                        </div>                    
                    </div>  
                </Collapse>   
            </React.Fragment>                                     
        );
    }

    private handleClose = () => { 
        
        if(this.props.onClose) {
            this.props.onClose();
        }
    }
}

interface IBannerProps  extends StyledComponentProps<Estilos> {
    text: string;
    open:boolean;
    buttonLabel?: string;
    onClose: () => void;
}

export default withStyles(styles)(BannerInner);
